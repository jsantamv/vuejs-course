export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Nostrud dolore culpa excepteur id mollit anim sunt ad exercitation nisi labore nostrud incididunt mollit.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Nisi labore est Lorem mollit nostrud aliquip sint minim cillum esse cupidatat anim minim laboris.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Sint eu reprehenderit consequat elit ex deserunt enim ea aute.Nisi eiusmod culpa duis dolor laborum et deserunt aliqua elit.',
            picture: null
        }
    ]
})