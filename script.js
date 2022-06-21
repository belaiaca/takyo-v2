
const App = {
  data() {
    return {
      isFullscreen: false,
      activeIndex: 0,
      list: [
        {
          name: "???",
          type: "???",
      
          desc:
            "CONFIDENTIAL",
          img:
            "img/AdobeStock_501699398.jpeg",
          thumbImg:
            "img/profile1.png"
        },
        {
          name: "Sidas",
          type: "Assassin",
          desc:
            "Sidas is the leader of the Order of Shadow.",
          img:
            "img/AdobeStock_3269115501.jpeg",
          thumbImg:
            "img/profile2.png"
        },
        {
          name: "Mira",
          type: "Howl",
          
          desc:
            "Mira is a Ciber-Howl",
          img:
            "img/AdobeStock_481168649.jpeg",
          thumbImg:
            "img/profile4.png"
        },
        {
          name: "Adeis",
          type: "Skull",
          desc:
            "A robotic sordier skull ",
          img:
            "img/AdobeStock_4776124841.jpeg",
          thumbImg:
            "img/profile3.png"
        }
      ]
    };
  },
  computed: {
    activeInfo() {
      if (!this.list.length) return null;
      return this.list[this.activeIndex];
    },
    itemPosition() {
      const len = this.list.length;
      return this.list.map((_, key) => {
        const deg = (360 / len) * key - 90;
        const radius = "2rem";
        return `rotate(${deg}deg) translate(${radius}) rotate(${-deg}deg)`;
      });
    }
  },

};

Vue.createApp(App).mount("#app");