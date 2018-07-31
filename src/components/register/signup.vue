<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form>
<v-layout row>
<v-flex xs12>
    <v-text-field
        name="email"
        label="mail"
        id="email"
        v-model="email"
        type="email"
        required>
    </v-text-field>
</v-flex>
</v-layout>

<v-layout row>
<v-flex xs12>
    <v-text-field
        name="pass"
        label="Password"
        id="pass"
        v-model="pass"
        type="password"
        required>
    </v-text-field>
</v-flex>
</v-layout>

                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
