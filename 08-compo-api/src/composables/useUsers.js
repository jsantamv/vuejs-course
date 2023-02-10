import axios from "axios"
import { ref } from "vue"

const useUsers = () => {
    const users = ref([])
    const isLoading = ref(true)
    const currentPage = ref(1)
    const errorMessage = ref()
    const total_pages = ref(0)

    const getUsers = async (page = 1) => {

        console.log('entre');

        if (page <= 0) page = 1
        isLoading.value = true

        const { data } = await axios.get('https://reqres.in/api/users', {
            params: { page }
        })

        users.value = data.data
        total_pages.value = data.total_pages

        if (data.data.length > 0) {
            users.value = data.data
            currentPage.value = page
            errorMessage.value = null
        } else if (currentPage.value > 0) {
            errorMessage.value = 'no hay mas usuarios'
        }

        isLoading.value = false
    }


    getUsers()

    return {
        isLoading,
        errorMessage,
        users,
        currentPage,
        total_pages,

        nextPage: () => getUsers(currentPage.value + 1),
        prevPage: () => getUsers(currentPage.value - 1),
    }
}

export default useUsers