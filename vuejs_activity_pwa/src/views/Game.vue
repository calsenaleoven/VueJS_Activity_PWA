<template>
    <div>
        <Taas/>
        <Sect/>
    </div>
</template>
<script>

import Sect from '@/Game/Sect.vue';
import Taas from '@/Game/Taas.vue';

export default
{
    name: 'Game',
    components: 
    {
        Taas,
        Sect
    }
}

</script>
<style>
@import url(https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
@import url(https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css);








</style>