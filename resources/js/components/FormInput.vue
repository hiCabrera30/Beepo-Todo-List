<template>
    <div>
        <div v-if="label" class="text-sm color-gray-600" v-text="label"></div>
        <input
            :type="type"
            class="form-input"
            :readonly="disabled"
            :value="value"
            :placeholder="placeholder"
            autocomplete="off"
            ref="input"
            @input="input"
            @blur="blur"
            @focus="focus" />
        <span v-if="hasError" class="text-red-500" v-text="errorMessage"></span>
    </div>
</template>
<script>
export default {
    

    computed: {
        hasError() {
            return this.error
                && (!this.isArrayAnEmptyString()
                || this.isArrayAnEmptyArray());
        },

        errorMessage() {
            return Array.isArray(this.error)
                ? this.error[0]
                : this.error;
        },
    },

    data() {
        return {
            data: this.value,
            error: "",
        }
    },

    methods: {

        clearError() {
            this.error = null;
        },

        input(event) {
            if (this.hasError) {
                this.clearError();
            }
            if (this.type.toLowerCase() === "integer") {
                const value = parseInt(event.target.value);
                this.emmitInput(isNaN(value) ? 0 : value);
                return;
            } else if (this.type.toLowerCase() === "decimal" && event.target.value.split(".").length > 2) {
                this.emmitInput(parseFloat(event.target.value));
                return;
            }
            this.emmitInput(event.target.value);
        },

        emmitInput(value) {
            this.$emit("input", this.$refs.input.value = this.data = value);
        },

        blur(event) {
            this.$emit("blur", event)
        },

        focus(event) {
            this.$emit("focus", event)
        },

        isArrayAnEmptyString() {
            return typeof this.error === "string"
                && !this.error.trim().length;
        },
        
        isArrayAnEmptyArray() {
            return Array.isArray(this.error)
                && !this.error.length;
        },
    },
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        label: String,
        placeholder: String,
        type: {
            default: 'text',
            type: String,
        },
        value: String | Number | Object | Array,
    },
}
</script>