<template>
    <v-container>
        <v-parallax jumbotran dark src="../assets/technologies.png">
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="text-h2 font-weight-bold">
                        Technologies
                    </h1>
                    <v-chip class="ma-2" color="primary">
                        CLOUD COMPUTING
                    </v-chip>
                    <v-chip class="ma-2" color="primary">
                        DEVOPS
                    </v-chip>
                    <v-chip class="ma-2" color="primary">
                        DATA INTEGRATION
                    </v-chip>
                </v-col>
            </v-row>
        </v-parallax>
        <v-container fluid>
            <v-sheet elevation="6">
                <v-card>
                    <v-row>
                        <v-tabs v-model="tab" slider-color="black" show-arrows>
                            <v-tab>
                                CLOUD COMPUTING
                            </v-tab>
                            <v-tab>
                                DEVOPS
                            </v-tab>
                            <v-tab>
                                DATA INTEGRATION
                            </v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tab">
                            <v-tab-item>
                                <CloudComputing></CloudComputing>
                            </v-tab-item>
                            <v-tab-item>
                                <DevOps></DevOps>
                            </v-tab-item>
                            <v-tab-item>
                                <DataIntegration></DataIntegration>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-row>
                </v-card>
            </v-sheet>
        </v-container>
    </v-container>
</template>
<script>
import CloudComputing from "../components/Technologies/CloudComputing"
import DevOps from "../components/Technologies/DevOps"
import DataIntegration from "../components/Technologies/DataIntegration"
export default {
    components: {
        CloudComputing,
        DevOps,
        DataIntegration,
    },
    data() {
        return {
            tab: null,
            tabs: [
                { id: 0, name: "Verticals/ApplicationDevelopment", text: "Application Development" },
                { id: 1, name: "Verticals/ITInfrastructure", text: "IT Infrastructre" },
                { id: 2, name: "Verticals/WebDesignSupport", text: "Web Designing & Support" },
                { id: 3, name: "Verticals/ConsultingServices", text: "Consulting Services" },
                { id: 4, name: "Verticals/PayrollHR", text: "Pay-roll & HR Services" },
                { id: 5, name: "Verticals/StaffingServices", text: "Staffing Services" },
            ],
            routerLink: {
                text: 'Application Development',
                value: 'Verticals/ApplicationDevelopment'
            },
        };
    },
    watch: {
    },
    computed: {
    },
    methods: {
    },
    created() {
    }
};
</script>
<style>
h4 {
    font-weight: bold;
    color: rgb(0, 110, 255);
}

strong {
    font-weight: bold;
    color: rgb(0, 110, 255);
}

p {
    text-align: justify;
}
</style>