<template>
  <div>
    <v-text-field
      :model-value="modelValue"
      :class="{
        'input_shadow py-1 !rounded-[12px] mb-3 border-solid border-[0.5px] border-[##f7f7f7] duration-500 px-4 bg-[#fff]': variant === 'default',
        'bg-[white]': variant === 'solo' && !disabled,
      }"
      :label="label"
      :maxLength="maxLength"
      :placeholder="placeholder"
      hide-details
      :readonly="readonly"
      :disabled="disabled"
      :autofocus="autoFocus"
      v-maska="maskType ? formMasks[maskType] : ``"
      :rules="required ? formRules.required : []"
      :type="dynamicFormType"
      @input="$emit('input', $event)"
      @update:modelValue="$emit('update:modelValue', $event)"
      @click="$emit('onClick')"
    >
      <div v-if="modelValue" class="absolute top-[27px] left-1 flex items-center justify-center">
        <p class="opacity-0 inline text-[17px]">{{ modelValue }}</p>
        <span>{{ inputSuffix }}</span>
      </div>

      <template #append-inner>
        <slot name="append-inner">
          <div v-if="iconName" @click="$emit('onIconClick')">
            <nuxt-icon :name="iconName" filled />
          </div>
          <div v-if="type === 'password'">
            <nuxt-icon filled :name="showPassword ? '001/003' : '001/004'" @click="showPassword = !showPassword" class="cursor-pointer" />
          </div>
        </slot>
      </template>
    </v-text-field>
    <v-divider v-if="variant === 'solo' && !noBorder" :thickness="1" class="border-opacity-50" color="#f7f7f7"></v-divider>
  </div>
</template>

<script lang="ts">
export type Masks = 'date' | 'iin' | 'phone' | 'iik' | 'three-digit';
export type Suffix = 'KZT' | 'USD' | 'PERCENT' | 'SM' | 'KG';
export default defineComponent({
  props: {
    modelValue: {
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    variant: {
      type: String as PropType<'default' | 'solo'>,
      default: 'default',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    maxLength: {
      type: Number,
      required: false,
      default: 50,
    },
    readonly: {
      required: false,
      default: false,
    },
    disabled: {
      required: false,
      default: false,
    },
    autoFocus: {
      required: false,
      default: false,
    },
    suffix: {
      type: String as PropType<Suffix>,
    },
    required: {
      type: Boolean,
      required: false,
    },
    maskType: {
      required: false,
      type: String as PropType<Masks>,
    },
    iconName: {
      type: String,
      required: false,
    },
    noBorder: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const suffixList: { [key in Suffix]: string } = {
      KZT: '₸',
      USD: '$',
      PERCENT: '%',
      SM: 'см',
      KG: 'кг',
    };
    const showPassword = ref<boolean>(false);

    const formMasks: {
      [key in Masks]: string;
    } = {
      iin: `###-###-###-###`,
      phone: `+7 (7##) ### ## ##`,
      date: `##.##.####`,
      iik: `KZXXXXXXXXXXXXXXXXXX`,
      'three-digit': `###`,
    };

    const dynamicFormType = computed(() => {
      if (props.type === 'password') {
        return showPassword.value ? 'text' : 'password';
      }
      return props.type;
    });

    const inputSuffix = computed(() => (props.suffix ? suffixList[props.suffix] : ''));

    return { inputSuffix, formMasks, dynamicFormType, showPassword };
  },
});
</script>
