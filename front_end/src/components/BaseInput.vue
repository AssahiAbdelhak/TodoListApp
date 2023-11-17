<template>
    <InputGroup>
        <InputGroupAddon>
            <slot></slot>
        </InputGroupAddon>
        <InputText @input="updatevalue" v-model="inputvalue" v-if="inputType == 'text'" :placeholder="placeholder" />
        <Password @input="updatevalue" v-model="inputvalue" v-if="inputType == 'password'" toggleMask :placeholder="placeholder" :feedback="false" />
    </InputGroup>
</template>

<script>
import { reactive,ref,toRefs} from 'vue'
export default {
    name : 'BaseInput',
    emits : ['update:modelValue'],
    props : {
        inputType : {
            type : String,
            validator : (value) => ['text','password'].includes(value),
            required : true
        },
        placeholder : {
            type: String,
            required : true
        },
        modelValue : {
            type : String,
            required : true
        }
    },
    setup(props,{emit}){

        const inputvalue = ref(props.modelValue)

        function updatevalue(e){
            emit('update:modelValue',e.target.value)
        }

        return{
            updatevalue,
            inputvalue
        }
    }
}

</script>

<style>

</style>