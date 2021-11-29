<template>
  <v-app>
    <v-app-bar app color="light-green lighten-1" dark>
      <div class="d-flex align-center">
        <span class="text-h5 font-weight-black"
          >{} JSON parser and prettifier on Skynet</span
        >
      </div>
      <v-spacer></v-spacer>
      <v-card color="light-green lighten-5" class="px-2 pt-2">
        <a href="https://github.com/lacastar/jsonparser"
                ><v-img
                  class="d-inline-flex"
                  alt="Source"
                  title="Source"
                  max-height="32"
                  max-width="32"
                  :src="require('./assets/GitHub-Mark-32px.png')"
              /></a>
              <a href="https://siasky.net/">
              <v-img
                dense
                  alt="Visit Skynet"
                  title="Visit Skynet"
                  class="d-inline-flex"
                  max-height="32"
                  max-width="32"
                  :src="require('./assets/skynet.png')"
                />
                </a>
      </v-card>
    </v-app-bar>

    <v-main>
      <v-alert
        v-model="dialog"
        dense
        border="left"
        type="warning"
        dark
        dismissible
      >
        {{ error_msg }}
      </v-alert>

      <v-container fluid style="height: 100%">
        <v-layout fill-height>
          <v-row>
            <v-col xs="12" md="9" class="mr-auto">
                  Just paste you JSON in the editor below and press the button:
                  <v-btn
                    dense
                    elevation="2"
                    outlined
                    color="light-green lighten-1"
                    v-on:click="formatJSON"
                    >Format</v-btn
                  >
            </v-col>      
            <v-col xs="12" md="2" class="mt-3 float-right"> 
              <a
                href="https://homescreen.hns.siasky.net/#/skylink/AQDSk2A2WU90V_9Kz4bJNf66z4a9PJZ5qPTzgrBMcNwP_w"
              >
                <v-img
                  max-height="20"
                  max-width="187"
                  src="https://img.shields.io/badge/Skynet-Add%20To%20Homescreen-00c65e?logo=skynet&labelColor=0d0d0d"
                />
              </a>  
            </v-col>
            <editor
                v-model="content"
                @init="editorInit"
                lang="json"
                theme="chrome"
                width="100%"
                height="90%"
              ></editor>
           
          </v-row>
          
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    editor: require("vue2-ace-editor"),
  },

  data: () => ({
    content: "",
    editor: null,
    error_msg: "",
    dialog: false,
  }),
  methods: {
    editorInit: function (editor) {
      this.editor = editor;
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/json"); //language
      require("brace/mode/less");
      require("brace/theme/chrome");
      require("brace/snippets/javascript"); //snippet
      editor.getSession().setMode("ace/mode/json");
      editor.setShowPrintMargin(false);
    },
    formatJSON: function () {
      this.dialog = false;
      let jsonDoc = this.editor.getValue();
      try {
        jsonDoc = JSON.parse(jsonDoc);
        this.editor.setValue(JSON.stringify(jsonDoc, null, "\t"));
        this.editor.clearSelection();
      } catch (exception) {
        console.log(exception.message);
        this.error_msg = exception.message;
        this.dialog = true;
      }
    },
  },
};
</script>
