<template>
    <div id="blur" >
        <div id="color-1" class="circle" ></div>
        <div id="color-2" class="circle" ></div>
    </div>
</template>

<script>
export default{
    name:'BlurBg'
}
</script>

<style  scoped>
#color-1{
    background-color:var(--blur-color1);
}
#color-2{
    background-color:var(--blur-color2);
}
#color-1,#color-2{
    width: 90px;
    height: 90px;
    filter:blur(80px)
}

</style>