const { createApp } = Vue;

createApp({
  data() {
    return {
      //array in cui pushamo tutte le email generate
      emails: [],
    }
  },

  methods: {
    //funzioni
    fetchEmails() {

      //richiesta emails
      for(let i = 0; i < 10; i++) {
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((answer) => {
            this.emails.push(answer.data.response)
          })
      }

    }
  },

  created() {
    this.fetchEmails()
  }
}).mount('#app')