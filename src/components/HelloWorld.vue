<template>
  <div class="hello">
		<h1>{{ msg }}</h1>
		<p>
			有关如何配置/定制此项目的指导和配方,<br> 请查阅
			<a
				href="https://cli.vuejs.org"
				target="_blank"
			>vue-cli文档</a>.
		</p>
		<h3>已安装的CLI插件</h3>
		<ul>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
					target="_blank"
				>babel</a>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
					target="_blank"
				>eslint</a>
			</li>
		</ul>
		<h3>基本链接</h3>
		<ul>
			<li>
				<a
					href="https://vuejs.org"
					target="_blank"
				>核心文件</a>
			</li>
			<li>
				<a
					href="https://forum.vuejs.org"
					target="_blank"
				>论坛</a>
			</li>
			<li>
				<a
					href="https://chat.vuejs.org"
					target="_blank"
				>社区聊天</a>
			</li>
			<li>
				<a
					href="https://twitter.com/vuejs"
					target="_blank"
				>推特</a>
			</li>
		</ul>
		<h3>Ecosystem</h3>
		<ul>
			<li>
				<a
					href="https://router.vuejs.org"
					target="_blank"
				>vue-router</a>
			</li>
			<li>
				<a
					href="https://vuex.vuejs.org"
					target="_blank"
				>vuex</a>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/vue-devtools#vue-devtools"
					target="_blank"
				>vue-devtools</a>
			</li>
			<li>
				<a
					href="https://vue-loader.vuejs.org"
					target="_blank"
				>vue-loader</a>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/awesome-vue"
					target="_blank"
				>awesome-vue</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
