<template>
  <div>
    <div class="top">
      <top-nav :noShowSearch="true"></top-nav>
      <div class="search">
        <div class="mylogo">
          <img src="./img/5.gif" />
        </div>
        <div>
          <input
            type="text"
            class="myinput"
            ref="myinput"
            @keyup.enter="mysearch"
            v-model="mykeywords"
            placeholder="请搜索关键词"
            @focus="noshow"
            @blur="needshow"
          />
          <button type="button" class="mybutton" @click="mysearch2">搜索</button>
          <div class="mykey">
            <el-tooltip
              v-for="n in msg2"
              :key="n.id"
              class="mybutton2"
              effect="transparent"
              @click.native="myshow(n.class1)"
            >
              <el-button>{{n.class1}}</el-button>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="keyshow">
        <div class="left">
          <div v-for="n in msg" :key="n.id" class="mainshow_son">
            <router-link :to="{path:'/firstpage',query:{id:n.id}}" class="myrouter">
              <good-advise2
                :pic="n.pic"
                :info="n.info"
                :price="n.price"
                :shop="n.shop"
                :title1="n.title1"
              ></good-advise2>
            </router-link>
          </div>
        </div>

        <div class="right">
          <div v-for="n in msg3" :key="n.id" >
            <router-link :to="{path:'/firstpage',query:{id:n.id}}" class="myrouter">
              <good-advise
                :pic="n.pic"
                :info="n.info"
                :price="n.price"
                :shop="n.shop"
                :title1="n.title1"
                class="myright"
              ></good-advise>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <el-pagination class="mypage" background layout="prev, pager, next"></el-pagination>
  </div>
</template>
<script>
import goodadvise from "@/components/style_tag/good_advise.vue";
import goodadvise2 from "@/components/style_tag/good_advise2.vue";
export default {
  data() {
    return {
      activeIndex2: "1",
      mykeywords: this.$store.state.kw + "",
      msg: {},
      msg2: {},
      msg3: [],

    };
  },
  components: {
    "good-advise": goodadvise,
    "good-advise2": goodadvise2
  },
  watch: {
    keywords: function() {
      this.getData();
    }
  },
  computed: {
    keywords: function() {
      return this.$store.state.kw;
    }
  },
  created() {
    console.log(1111);
    this.getData();
    this.axios
      .get("/showtype", {
        params: { kw2: "类型" }
      })
      .then(res => {
        console.log(res.data);
        this.msg2 = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    getData() {
      console.log(this.mykeywords);
      this.axios
        .get("/goodssearch", {
          params: {
            keyw1: this.mykeywords
          }
        })
        .then(res => {
          this.msg = res.data;
          console.log(this.msg);
          for(var i=0;i<res.data.length;i++){
              if(this.msg3.length<4){
                  this.msg3.push(res.data[i])
              }
              console.log(this.msg3)
          }   
        })
        .catch(err => {
          console.log(err);
        });
    },
    noshow() {
      this.$refs.myinput.placeholder = "";
    },
    needshow() {
      if (this.$refs.myinput.value == "") {
        this.$refs.myinput.placeholder = "请搜索关键词";
      }
    },
    mysearch() {
      this.$store.commit("changekw", {
        kw: this.mykeywords
      });
      this.getData();
    },
    mysearch2() {
      this.$store.commit("changekw", {
        kw: this.mykeywords
      });
      this.getData();
    },
    myshow(val) {
      console.log(3333);
      this.mykeywords = val;
      this.getData();
      this.$store.commit("changekw", {
        kw: this.mykeywords
      });
    }
  }
};
</script>
<style scoped>
.top {
  position: relative;
  top: 0px;
  left: 0px;
}
.search {
  background: url("./img/timg.jpg");
  background-size: contain;

  width: 100%;
  height: 150px;
  background-color: antiquewhite;
  position: absolute;
  top: 62px;

  /* line-height: 130px; */
}

.search .mylogo img {
  width: 150px;
  height: 120px;
  background-color: lightpink;
  /* border-radius: 50%; */
  position: absolute;
  top: 22px;
  left: 150px;
}
.search .myinput {
  width: 624px;
  height: 40px;
  border: 2px solid #ff6542;
  position: absolute;
  top: 64px;
  left: 470px;
  padding-left: 15px;
  box-sizing: border-box;
  outline: none;
}
input::-webkit-input-placeholder {
  font-size: 16px;
  letter-spacing: 2px;
}
.search .mybutton {
  width: 50px;
  height: 40px;
  background-color: #ff6542;
  position: absolute;
  top: 64px;
  left: 1047px;
  outline: none;
  border-color: transparent;
  color: #ffffff !important;
  font-size: 16px !important;
}
.mykey {
  width: 628px;
  height: 30px;
  /* background-color: aquamarine; */
  position: absolute;
  top: 110px;
  left: 470px;
  overflow: hidden;
}
.mybutton2 {
  padding: 6px 8px !important;
}
.keyshow {
  width: 100%;
  height: auto;
  background-color: #f8f8f8;
  margin-top: 211px;
  padding: 40px;
  display: flex;
  flex-direction: row;
}
.keyshow .left {
  width: 80%;
  height: auto;
  padding-left: 80px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
.keyshow .left div {
  margin: 10px;
}
.keyshow .right {
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
}
.keyshow .right .myright {
  height: 330px;
  margin: auto;
  margin-bottom: 15px !important;
}
.myrouter {
  text-decoration: none;
  color: #333;
}

.mypage {
    background-color:#f8f8f8; 
}
</style>

