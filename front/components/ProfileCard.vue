<template>
  <v-container>
    <v-card
      v-for="(item, index) in post"
      :key="index"
      class="mx-auto mb-4"
      :to="`/post/${item.id}`"
      max-height="250"
      outlined
    >
      <v-container
        v-ripple
      >
        <div>
          <v-chip color="blue-grey" small outlined label>{{ item.category }}</v-chip>
        </div>
        <p class="font-weight-medium caption ma-0 mt-2 mb-2">{{ $moment(item.createdAt).format("YYYY년 MM월 DD일") }}</p>
        
        <a id="postLink" class="mb-4">{{ item.title }}</a>
        <p> {{ bodyContent(item.content) }} </p>
      </v-container>
      
    </v-card>
  </v-container>
</template>
<script>
export default {
  props: {
    post: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      limit: 80,
      bodyText: '기술 스택 정하기 - 해당 기술을 고르면, 예를 들어 프레임워크면 해당 프레임워크를 고른 이유, 장점, 다른 프레임워크와의 차이점 정도는 알아두고 적어두기 2. 실제 생활에 불편한 점을 접목시켜 만들면 좋음 3. 꼭 배포해서 데모사이트 주소도 포트폴리오에 포함시키기 위해서',
      datetime: '2019년 3월 16일',
      title: '자바스크립트 개발자라면 알아야 할 33가지 개념 #1 콜스택 (번역)',
    }
  },
  computed: {
    
  },
  methods: {
    bodyContent(data){
      const bodyText = data.replace(/(<([^>]+)>)/ig,"");
      const result = this.lengthCheck(bodyText);
      return result;
    },
    lengthCheck(bodyText){
      let result = '';
      if(bodyText.length >= 150){
        result = bodyText.slice(0, 150);
        result += " ...";
      }else{
        result = bodyText;
      }
      return result;
    }
  },


}
</script>
<style scoped>
#postLink{
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}
#postLink:hover {
  color: #0D47A1;
}
#postLink:active {
  color: #0D47A1;
}

</style>