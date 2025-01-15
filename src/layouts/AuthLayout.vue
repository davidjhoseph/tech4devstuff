<template>
    <div class="flex w-screen h-screen">
        <div class="w-2/5 relative">
            <img :src="`/public/images/${selectedImage}`"
                class="h-full w-full object-cover absolute inset-0 z-0" />
            <div class="z-20 inset-0 absolute">
                <div class="w-full h-full flex justify-end flex-col items-center pb-14 text-white">
                    <div class="text-xl font-semibold">No Hazzles</div>
                    <div class="w-2/3 text-center my-4 text-xl font-light">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod.</div>
                    <div class="flex items-center space-x-3">
                        <div class="size-5 flex items-center justify-center border rounded-full"
                            :class="selectedImage === image ? 'border-gray-400' : 'border-transparent'"
                            v-for="image in images" :key="image">
                            <button class="size-2.5 rounded-full"
                                :class="selectedImage === image ? 'bg-green-500' : 'bg-gray-200'"
                                @click="selectedImage = image"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-3/5 flex flex-col h-full p-6">
            <div class="flex-1 flex justify-center items-center">
                <slot />
            </div>
            <div class="flex items-center justify-between text-gray-700 text-sm font-light">
                <div>By siging up, you agree to our <a class="text-green-500 font-semibold">Terms</a> and
                    <a class="text-green-500 font-semibold">Privacy Policy</a>
                </div>
                <div>© 2019 Tinylabs. All rights reserved.</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 data(){
    return {
        selectedImage: 'Banner.png',
        images: [
            'Banner.png',
            'Banner2.png',
        ]
    }
 }
}
</script>