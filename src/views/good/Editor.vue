<template>
<div class="editor">
  <h1>商品详情发布</h1>
  <div class="title">
    <el-input v-model='title'></el-input>
  </div>
  <quill-editor
    ref="myQuillEditor"
    v-model="content"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
  />
  <div>
    <el-button type='primary' @click='submit'>发布</el-button>
  </div>
</div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  name:'Editor',
  components: {
    QuillEditor: quillEditor
  },
  data: function() {
    return {
      content: '',
      title: '',
      editorOption: {
        // Some Quill options...
      }
    }
  },
  methods: {
    onEditorBlur() {
      // console.log('editor blur!', quill)
      // console.log(this.content)
    },
    onEditorFocus() {
      // console.log('editor focus!', quill)
    },
    submit() {
      let data = {
        title: this.title,
        content: this.content
      }
      this.$http.articleCreate(data).then(()=>{
        console.log('发布成功')
        this.title = ''
        this.content = ''
      })
    }
  }
}
</script>

<style lang="scss">
.editor {
  background: white;
  width: 90%;
  margin: 0 auto;
  padding: 25px;
  box-sizing: border-box;
}
.title {
  margin-bottom: 15px;
}
.quill-editor {
  min-height: 400px;
}
.ql-container {
  min-height: 400px;
}
</style>
