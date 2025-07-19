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
    
    <div>

        <Draggable
            v-model="columns"
            group="columns"
            item-key="id"
            :animation="350"
            class="flex items-start space-x-4"
        >
            <template #item="{element: column} : {element: Column}">
                <div class="bg-gray-50 rounded shadow min-w-[25p0x] p-5" >
                    <header class="font-bold"> {{ column.title }}</header>
                    <Draggable
                      v-model="column.tasks"
                      group="tasks"
                      item-key="id"
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