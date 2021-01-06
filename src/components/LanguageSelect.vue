<template>
        <v-col sm="2" md="2" lg="2" xl="2">
        <v-select
            v-model="select"
            :items="items"
            item-text="language"
            label="Select"
            persistent-hint
            return-object
            single-line
        >
        </v-select>
        </v-col>
</template>

<script>
export default {
    data() {
        return {
            select: { language: "Eng" },
            items: [{ language: "Eng" }, { language: "Tur" }],
        }
    },
};
</script>

<style lang="scss" scoped></style>
