import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/views/Layout.vue';
import Dashboard from '@/views/pages/Dashboard.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '',
			component: Layout,
			children: [
				{
					path: '',
					component: Dashboard
				},
				{
					path: 'EntryForm',
					component: () => import('@/views/pages/DataEntryForm.vue')
				},
				{
					path: 'ViewPage',
					component: () => import('@/views/pages/DataViewPage.vue')
				},
				{
					path: 'ExportPage',
					component: () => import('@/views/pages/DataExportPage.vue')
				},
				{
					path: 'ViewProject',
					component: () => import('@/views/pages/ViewProject.vue')
				}
			]
		}
	]
})

export default router