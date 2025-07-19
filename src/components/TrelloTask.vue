<script setup lang="ts">
    import type { Task } from '@/types';

    defineProps<{
        task: Task
    }>()

</script>


<template>
    <div  class="bg-red-100 rounded shadow p-2 mb-2" >
        {{ task.title }}
    </div>
</template>

<style scoped>

</style>