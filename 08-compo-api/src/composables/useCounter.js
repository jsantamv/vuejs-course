import { ref } from "vue"

const useCounter = (initialValue = 5) => {
    const counter = ref(initialValue)

    return {
        //obj reactivos
        counter,
        //methods
        decrease: () => counter.value--,
        increase: () => counter.value++,
    }

}

export default useCounter