<template>
    <div id="search-pane" class="grid grid-rows-2">
        <div id="search-box" class="w-full">
            <div class="flex rounded-lg shadow-sm relative">

                <input v-model="searchQuery" @input="filterMatches" autofocus type="text"
                    id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon"
                    class="py-3 px-4 block w-full shadow-sm rounded-s-lg text-sm outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                    placeholder="Search Animal">
                <div v-if="showDropdown"
                    class="dropdown absolute z-50 top-12 left-0 z-5000 bg-white rounded-lg shadow-lg mt-2 w-full">
                    <div v-for="match in matches" :key="match" @click="selectMatch(match)"
                        class="px-4 py-2 hover:bg-gray-100 cursor-pointer overflow-auto scrollbar-thin">
                        {{ match }}
                    </div>
                </div>

                <button type="submit" @click="searchAnimal(searchQuery)"
                    class="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none">
                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div id="list" class="w-full relative overflow-auto md:flex md:flex-wrap">
            <img src="../assets/arrow.gif" class="hidden absolute bottom-0 right-0" id="down-arrow">
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchQuery: '',
            matches: [],
            showDropdown: false,
            animalList: ["Leopard", "Black Panther", "Spotted Deer", "Bison", "Hog Deer", "Boar", "Crocodile", "Goral", "Sambar Deer", "Indian Hare", "Wolf", "Chital", "Jackal", "Jaguar", "Asian Elephant", "Himalayan Black Bear", "Pangolin", "Gharial", "Royal Bengal Tiger", "Sloth", "Nilgai", "Langur", "Cheetah", "Indian Grey Mongoose", "Fox"],
            selectedAnimals: [],
            currAnimal: '',
            center: '',
            animals: []
        };
    },

    methods: {

        filterMatches() {
            this.matches = this.animalList.filter(animal => animal.toLowerCase().includes(this.searchQuery.toLowerCase()));
            this.showDropdown = this.matches.length > 0 && this.searchQuery.length > 0;
        },

        selectMatch(match) {
            this.searchQuery = match;
            this.hideDropdown();
        },

        hideDropdown() {
            this.showDropdown = false;
        },

        searchAnimal(query) {

            const animalTagsContainer = document.createElement('div');
            const animalTagsClass = document.getElementsByClassName('animal-tag');

            if (!query) {
                alert('Please Search for an Animal !')
                return
            }

            if (this.selectedAnimals.includes(query)) {
                alert("You have already selected " + query);
                this.searchQuery = '';
                return;
            }

            if (this.selectedAnimals.length >= 5) {
                alert("You can add a maximum of 5 Animals");
                return;
            }

            if (this.selectedAnimals.length >= 1 && window.innerWidth <= 768) {
                let downArr = document.getElementById('down-arrow');
                downArr.style.display = 'inline-block';
            }

            const animalTag = document.createElement('button');

            animalTag.innerHTML = query;
            animalTag.classList.add('animal-tag', 'py-3', 'px-5', 'w-80', 'cursor-pointer', 'm-4', 'rounded-full', 'text-black', 'bg-white', 'text-base', 'border', 'border-black-800', 'font-semibold', 'shadow');

            animalTagsContainer.appendChild(animalTag);

            animalTag.addEventListener('click', () => {
                if (this.currAnimal) {
                    for (let i = 0; i < animalTagsClass.length; i++) {
                        let tag = animalTagsClass[i];
                        if (tag.innerText == this.currAnimal) {
                            tag.classList.remove('bg-black', 'text-white');
                            tag.classList.add('bg-white', 'text-black');
                        }
                    }
                }

                animalTag.classList.add('bg-black', 'text-white');
                animalTag.classList.remove('bg-white', 'text-black');

                this.currAnimal = query;

                const animal = this.animals.find(animal => animal.name === this.currAnimal);
                const coordinates = { lat: animal.latitude, lng: animal.longitude };
                this.center = coordinates;

                if (!this.$bus) {
                    console.error("EventBus not available");
                    return;
                }

                const searchAnimal = document.getElementById('search-animation');
                searchAnimal.style.opacity = '1';
                searchAnimal.append(document.createElement('div'));

                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("aria-hidden", "true");
                svg.setAttribute("class", "absolute w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600");
                svg.setAttribute("viewBox", "0 0 100 101");
                svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

                const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path1.setAttribute("d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z");
                path1.setAttribute("fill", "currentColor");

                const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path2.setAttribute("d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z");
                path2.setAttribute("fill", "currentFill");

                svg.appendChild(path1);
                svg.appendChild(path2);

                searchAnimal.appendChild(svg);

                setTimeout(() => {
                    searchAnimal.style.opacity = '0';
                }, 2000)

                this.$bus.setData(this.center);
            })

            const crossButton = document.createElement('button');
            crossButton.innerHTML = '<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M15.364 4.636a2 2 0 00-2.828 0L10 7.172 7.464 4.636a2 2 0 10-2.828 2.828L7.172 10l-2.536 2.536a2 2 0 102.828 2.828L10 12.828l2.536 2.536a2 2 0 102.828-2.828L12.828 10l2.536-2.536a2 2 0 000-2.828z" clip-rule="evenodd"/></svg>';
            crossButton.className = 'cursor-grab text-black transition duration-500 ease-in-out rounded-full';
            crossButton.style.fontSize = '0.8vw';
            animalTagsContainer.append(crossButton);

            crossButton.addEventListener('click', () => {
                animalList.removeChild(animalTagsContainer);
                this.selectedAnimals = this.selectedAnimals.filter(item => item != query);
            })

            animalTagsContainer.classList.add('flex', 'items-center');

            const animalList = document.getElementById('list');
            animalList.appendChild(animalTagsContainer);
            animalList.style.display = 'block';
            this.selectedAnimals.push(query);

            this.searchQuery = '';
        },

        // fetch list of animals and their coordinates from database
        async fetchAnimals() {
            try {
                // const response = await axios.get('http://localhost:3000/getAnimals');
                const response = await axios.get('https://animal-data.onrender.com/getAnimals');
                if (Array.isArray(response.data)) {
                    this.animals = response.data;
                } else {
                    console.error("Invalid Data format received from the Server");
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
    watch: {
        center(newCenter) {
            this.$bus.setData(newCenter);
        }
    },
    mounted() {
        this.fetchAnimals();
    },
}
</script>

<style scoped>
@media screen and (max-width:768px) {
    #list {
        height: 5rem;
        width: 100vw;
        scrollbar-color: transparent transparent;
        scrollbar-width: none;
    }

    #list>* {
        width: 80vw;
    }

    #down-arrow {
        width: 20%;
    }
}

#search-pane {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
}
</style>