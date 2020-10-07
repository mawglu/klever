<template>
    <b-modal id="feedback" hide-header hide-footer modal-class="feedback-modal">
        <b-button @click="$bvModal.hide('feedback')" variant="modal">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M1.27832 15.1426L15.4205 1.00044" stroke="white"
                      stroke-width="2"/>
                <path d="M1.27832 1L15.4205 15.1421" stroke="white" stroke-width="2"/>
            </svg>
        </b-button>
        <b-form>
            <b-form-group label-class="form-label" class="input-form"
                          :class="{ 'form-group--error': $v.production.$error }">
                <multiselect v-model="production" :options="options"
                             :searchable="false"
                             :allow-empty="false"
                             class="form-control">
                </multiselect>
                <template v-if="!$v.production.required">
                    <div class="error">Обязательное поле</div>
                </template>
            </b-form-group>
            <b-form-group label-class="form-label" class="input-form"
                          :class="{ 'form-group--error': $v.name.$error }">
                <b-form-input
                        v-model.trim="$v.name.$model"
                        placeholder="Имя"
                        name="name"
                />
                <template v-if="!$v.name.required">
                    <div class="error">Обязательное поле</div>
                </template>
                <template v-else-if="!$v.name.alpha">
                    <div class="error">Поле должно содержать только кириллицу</div>
                </template>
            </b-form-group>
            <b-form-group label-class="form-label" class="input-form"
                          :class="{ 'form-group--error': $v.company.$error }">
                <b-form-input
                        v-model.trim="$v.company.$model"
                        placeholder="Компания"
                        name="company"
                />
                <template v-if="!$v.company.required">
                    <div class="error">Обязательное поле</div>
                </template>
                <template v-else-if="!$v.company.alpha">
                    <div class="error">Поле должно содержать только кириллицу</div>
                </template>
            </b-form-group>
            <b-form-group label-class="form-label" class="input-form"
                          :class="{ 'form-group--error': $v.email.$error }">
                <b-form-input
                        v-model.trim="$v.email.$model"
                        placeholder="E-mail"
                        name="email"
                />
                <template v-if="!$v.email.required">
                    <div class="error">Обязательное поле</div>
                </template>
                <template v-else-if="!$v.email.email">
                    <div class="error">Укажите корректный e-mail</div>
                </template>
            </b-form-group>
            <b-form-group label-class="form-label" class="input-form"
                          :class="{ 'form-group--error': $v.phone.$error }">

                <input
                        placeholder="+7 (000) 000-00-00"
                        name="phone"
                        v-mask="phoneMask"
                        v-model.trim="$v.phone.$model"
                        class="form-control"
                >
                <template v-if="!$v.phone.required">
                    <div class="error">Обязательное поле</div>
                </template>
                <template v-if="!$v.phone.minLength">
                    <div class="error">Укажите полный номер</div>
                </template>
            </b-form-group>
            <b-form-group label-class="form-label" class="input-form">
                <b-form-textarea
                        v-model="comment"
                        placeholder="Комментарий…"
                        name="comment"
                        rows="5"
                />
            </b-form-group>
            <b-form-group label-class="form-label" class="input-form">
                <div class="d-flex">
                    <b-form-file
                            v-model="file"
                            placeholder="прикрепить файл/бриф"
                            name="file"
                            v-bind:class="{'active': file !== null}"
                    />
                    <b-button @click="file = null" variant="form" class="p-0 m-0">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <path d="M1.27832 11.0004L11.2783 1.00037" stroke="white" stroke-width="2"/>
                                <path d="M1.27832 1L11.2783 11" stroke="white" stroke-width="2"/>
                            </g>
                        </svg>
                    </b-button>
                </div>
            </b-form-group>
            <b-form-group label-class="form-label" class="input-form">
                <b-button type="submit" variant="modal">
                    <div class="circle circle-60 circle-green d-flex">
                        <svg class="m-auto" width="15" height="12" viewBox="0 0 15 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6153 6.53033C14.9082 6.23744 14.9082 5.76256 14.6153 5.46967L9.84232 0.696699C9.54943 0.403806 9.07455 0.403806 8.78166 0.696699C8.48877 0.989592 8.48877 1.46447 8.78166 1.75736L13.0243 6L8.78166 10.2426C8.48877 10.5355 8.48877 11.0104 8.78166 11.3033C9.07455 11.5962 9.54943 11.5962 9.84232 11.3033L14.6153 6.53033ZM0.0849609 6.75H14.085V5.25H0.0849609V6.75Z"
                                  fill="#161A25"/>
                        </svg>
                    </div>
                </b-button>
            </b-form-group>
        </b-form>
    </b-modal>
</template>

<script>
    import {required, email, minLength} from 'vuelidate/lib/validators';

    export default {
        name: "mainFeedback",
        components: {
            Multiselect: () => import(/* webpackChunkName: "vue-multiselect" */'vue-multiselect'),
        },
        data() {
            return {
                phoneMask: ['+7 (', /\d/, /\d/, /\d/, ') ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
                production: 'Сувенирная продукция',
                options: ['Сувенирная продукция', 'Полиграфические услуги', 'Рекламный продакшн'],
                name: '',
                company: '',
                email: '',
                phone: '',
                comment: '',
                file: null,
            }
        },
        validations: {
            production: {required},
            name: {required, alpha: val => /^[а-яё]*$/i.test(val)},
            company: {required, alpha: val => /^[а-яё]*$/i.test(val)},
            email: {required, email},
            phone: {required, minLength: minLength(17)},
            comment: {required, alpha: val => /^[а-яё]*$/i.test(val)},
        }
    }
</script>

<style scoped>

</style>