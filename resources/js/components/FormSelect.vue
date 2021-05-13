<template>
    <div class="">
        <div v-if="label" class="text-sm color-gray-600" v-text="label"></div>
        <multiselect :id="id"
            v-model="data"
            :placeholder="placeholder"
            :options="options"
            :max-height="150"
            :custom-label="displayedValue"
            :allow-empty="false"
            :select-label="''"
            @select="onChange"
        >
            <template slot="singleLabel" slot-scope="{ option }">
                <slot name="displayedValue" :option="option">
                    <span class="option__title" v-text="displayedValue(option)"></span>
                </slot>
            </template>
            
        </multiselect>
        <span v-if="hasError" class="text-danger" v-text="errorMessage"></span>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
export default {
    name: 'FormSelect',
    components: { Multiselect },

    computed: {

        deselectLabel() {
            return this.allowEmpty ? "Remove" : "";
        },
        id() {
            return `form-select-${ this._uid }`;
        },

        errorMessage() {
            return Array.isArray(this.error) ? this.error[0] : this.error;
        },

        hasError() {
            return this.error
                && (!this.isArrayAnEmptyString()
                || this.isArrayAnEmptyArray());
        },
    },

    data() {
        return {
            data: "",
            error: "",
        }
    },

    methods: {

        clearError() {
            this.error = null;
        },

        displayedValue(option) {
            return (typeof(option) === 'object' ? option[this.textKey] : option);
        },
        
        isArrayAnEmptyArray() {
            return Array.isArray(this.error)
                && !this.error.length;
        },
        
        isArrayAnEmptyString() {
            return typeof this.error === "string"
                && !this.error.trim().length;
        },

        onChange(data) {
            data = typeof(data) === 'object' && data[this.valueKey] !== undefined
                ? data[this.valueKey] : data;
            
            this.$emit("input", data);

            this.clearError();
        },
    },

    watch: {
        value(newValue) {
            if (newValue == null || newValue == "") {
                this.data = newValue;
            }
        }
    },

    props: {
        label: String,
        options: Array,
        placeholder: String,
        value: [Array, Number, String],
        valueKey: {
            type: String, default: 'value',
        },
        textKey: {
            type: String, default: 'text',
        },
    },

    mounted() {
        const dataList = this.options.filter(item => {
            const data = typeof(item) === 'object' && item[this.valueKey] !== undefined
                ? item[this.valueKey] : item;
            return data === this.value;
        });
        this.data = dataList.length > 0 ? dataList[0] : null;
    }
}

</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>