new Vue({
  el: "#app",
  data: {
    emails: [],
  },
  methods: {
    emailList: function () {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail ")
          .then((result) => {
            //prendiamo la "response" e salviamola in "number"
            this.emails.push(result.data.response);
          });
      }
    },
  },
});
