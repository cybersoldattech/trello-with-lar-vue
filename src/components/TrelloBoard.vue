<script setup lang="ts">
    import type { Column, Task } from '@/types';

    import { ref } from 'vue';

    import Draggable from 'vuedraggable';
    import TrelloTask from './TrelloTask.vue';

    const columns = ref<Array<Column>>([
        {   
            id:1,
            title: 'Upcomming',
            tasks: [
                {
                    id :1 , 
                    title: 'Cree une applicaion frontend',
                    content: 'Developper une application avec vue 3 et API compo'
                },
                  {
                    id :2, 
                    title: 'Cree une applicaion frontend title 2',
                    content: 'Developper une application avec vue 3 et API compo'
                }
            ]
        },
        {   
            id:2,
            title: 'Todo',
            tasks: []
        },
        {   
            id:3,
            title: 'Done',
            tasks: []
        },
    ])

</script>

<template>
    
  <div class="mx-auto max-w-full py-12 sm:px-6 lg:px-8">
        
    <p class="font-bold text-6xl text-center py-16">
            MANAGE TASK
    </p>

        <Draggable
            v-model="columns"
            group="columns"
            item-key="id"
            animation="550"
            class="flex flex-wrap gap-8 justify-center items-start"
        >
            <template #item="{element: column} : {element: Column}">
                <div class="bg-blue-50 rounded shadow min-w-[350px] p-4" >
                    <header class="font-bold flex justify-between py-4"> 
                        {{ column.title }}
                         <svg class="h-4 fill-current text-grey-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"/></svg>
                    </header>
                    <Draggable
                      v-model="column.tasks"
                      group="tasks"
                      item-key="id"
                      animation="400"
                    >

                    <template #item="{element: task} : {element: Task}">
                        <TrelloTask :task="task"/>
                    </template>
                    </Draggable>
                </div>
            </template>
        </Draggable>
  </div>

</template>


<style scoped>

</style>