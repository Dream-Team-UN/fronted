<template>
    <div>
        <div class="tipoComparacion">
            <h3>Seleccione el tipo de comparacion que desee realizar</h3>
        </div>
        <div class="contenedor_centro">
            <ComparacionMun v-bind:infoUser="infoReset"></ComparacionMun>
            <!--<ComparacionDptos v-bind:infoUser="infoReset"></ComparacionDptos>-->
        </div>
    </div>
</template>

<script>
import ComparacionMun from "./ComparacionMun";
import ComparacionDptos from "./ComparacionDptos";
export default {
    components: {
        ComparacionMun,
        ComparacionDptos
    },
};
</script>

<style>
    .tipoComparacion{
        height:70px;
        width: 1400px;
        background-color: #e4e3e3;
        margin-left: 200px;
        margin-top: 30px;
        border-radius: .5em;
    }

    .contenedor_centro{
        height: 639px;
        width: 1860px;
        position: absolute;
        top: 220px;
        left: 30px;
        background-color: #ffffff;
        border-style: solid;
        border-width: 0px;
        border-color: #e4e3e3;
    }

</style>