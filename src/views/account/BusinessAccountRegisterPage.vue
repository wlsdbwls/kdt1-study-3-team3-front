<template lang="">
    <div>
        <business-account-register-form @submit="onSubmit"/>
    </div>
</template>

<script>
import BusinessAccountRegisterForm from '@/components/account/BusinessAccountRegisterForm.vue';
import { mapActions } from 'vuex';

const accountModule = 'accountModule'

export default {
    components: {
        BusinessAccountRegisterForm
    },
    methods: {
        ...mapActions(accountModule, ['requestBusinessRegisterAccountToSpring']),
        async onSubmit (payload) {
            const {email, password, roleType, businessNumber} = payload
            await this.requestBusinessRegisterAccountToSpring(
                {email, password, roleType, businessNumber})
        }
    }
}
</script>

<style lang="">
    
</style>