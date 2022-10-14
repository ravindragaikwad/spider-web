<template>
    <v-container>
        <v-parallax jumbotran dark src="../assets/business-verticals.png">
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="text-h2 font-weight-bold mb-4">
                        Business Verticals
                    </h1>
                    <v-chip class="ma-2" color="primary">
                        APPLICATION DEVELOPMENT
                    </v-chip>
                    <v-chip class="ma-2" color="primary">
                        IT INFRASTRUCTURE
                    </v-chip>
                    <v-chip class="ma-2" color="primary">
                        WEB DESIGNING & SUPPORT
                    </v-chip>
                    <v-chip class="ma-2" color="primary">
                        CONSULTING SERVICES
                    </v-chip>
                    <v-chip class="ma-2" color="primary">
                        PAY-ROLL AND HR SERVICE
                    </v-chip>
                    <v-chip class="ma-2" color="primary">
                        STAFFING SERVICES
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
                                APPLICATION DEVELOPMENT
                            </v-tab>
                            <v-tab>
                                IT INFRASTRUCTURE
                            </v-tab>
                            <v-tab>
                                WEB DESIGNING & SUPPORT
                            </v-tab>
                            <v-tab>
                                CONSULTING SERVICES
                            </v-tab>
                            <v-tab>
                                PAY-ROLL AND HR SERVICE
                            </v-tab>
                            <v-tab>
                                STAFFING SERVICES
                            </v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tab">
                            <v-tab-item>
                                <ApplicationDevelopment></ApplicationDevelopment>
                            </v-tab-item>
                            <v-tab-item>
                                <ITInfrastructure></ITInfrastructure>
                            </v-tab-item>
                            <v-tab-item>
                                <WebDesignSupport></WebDesignSupport>
                            </v-tab-item>
                            <v-tab-item>
                                <ConsultingServices></ConsultingServices>
                            </v-tab-item>
                            <v-tab-item>
                                <PayrollHR></PayrollHR>
                            </v-tab-item>
                            <v-tab-item>
                                <StaffingServices></StaffingServices>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-row>
                </v-card>
            </v-sheet>
        </v-container>
    </v-container>
</template>
<script>
import ApplicationDevelopment from "../components/Verticals/ApplicationDevelopment"
import ITInfrastructure from "../components/Verticals/ITInfrastructure"
import WebDesignSupport from "../components/Verticals/WebDesignSupport"
import ConsultingServices from "../components/Verticals/ConsultingServices"
import PayrollHR from "../components/Verticals/PayrollHR"
import StaffingServices from "../components/Verticals/StaffingServices"
export default {
    components: {
        ApplicationDevelopment,
        ITInfrastructure,
        WebDesignSupport,
        ConsultingServices,
        PayrollHR,
        StaffingServices
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
        // active_tab: function (val) {
        //     var tabIndex = 0;
        //     for (var i = 0; i < this.tabs.length; i++) {
        //         var element = this.tabs[i];
        //         if (val.includes(element.name)) {
        //             tabIndex = element.id
        //             break;
        //         }
        //     }
        //     this.$store.dispatch('AppStore/SetTab', tabIndex)
        // }
    },
    computed: {
    },
    methods: {
    },
    created() {
        // this.$store.dispatch('AppStore/SetProductLine', this.PRODUCT_LINE_MEDICARE);
        //this.$store.dispatch('AppStore/SetTab', this.TAB_YOUR_DATA);
        //this.$store.dispatch('AppStore/SetRouterLink', this.routerLink);
    }
};
</script>