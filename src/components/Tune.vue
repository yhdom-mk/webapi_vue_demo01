<template>
  <h1>Tune</h1>
  <div class="container">
    <div>
      <button type="button"
        class="btn btn-primary m-2 float-end"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="addClick">
        Add Tune
      </button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>
              Tune Id
            </th>
            <th>
              Tune Name
            </th>
            <th>
              Album
            </th>
            <th>
              DOJ
            </th>
            <th>
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tun in tunes" v-bind:key="tun">
            <td>{{ tun.TuneId }}</td>
            <td>{{ tun.TuneName }}</td>
            <td>{{ tun.Album }}</td>
            <td>{{ tun.DateOfJoining }}</td>
            <td>
              <button type="button"
                class="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                v-on:click="editClick(tun)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </button>
              <button type="button"
                class="btn btn-light mr-1"
                v-on:click="deleteClick(tun.TuneId)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6.5 1a.5.5 0 0 0-.5.5v1h4v-1a.5.5 0 0 0-.5-.5h-3ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1H3.042l.846 10.58a1 1 0 0 0 .997.92h6.23a1 1 0 0 0 .997-.92l.846-10.58Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div classa="modal fade" id="exampleModal" tabindex="-1"
      aria-labelledbby="exampleModalLabel" aria-hidden="true"/>
      <div class="modal-dialog modal-lg modal-dialog-centerd"/>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 w-50 bd-highlight">
              <div class="input-group mb-3">
                <span class="input-group-text">Tune Name</span>
                <input type="text" class="form-control" v-model="TuneName"/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Album</span>
                <select class="form-select" v-model="Album">
                  <option v-for="abm in albums" :key="abm">
                    {{ abm.AlbumName }}
                  </option>
                </select>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">DOJ</span>
                <input type="date" class="form-control" v-model="DateOfJoining"/>
              </div>
            </div>
            <div class="p-2 w-50 bd-highlight">
              <img width="250px" height="250px"
              v-bind:src="PhotoPath+PhotoFileName"/>
              <input class="m-2" type="file" v-on:change="imageUpload"/>
            </div>
          </div>
          <button type="button" v-on:click="createClick"
          v-if="TuneId==0" class="btn btn-primary">
            Create
          </button>
          <button type="button" v-on:click="updateClick"
          v-if="TuneId!=0" class="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
  <h6>This page is for users Only.（このページはユーザ専用ページです）</h6>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { useRouter } from 'vue-router';
import axios from 'axios'
import variables from '../variables.js'
// import { onBeforeUnmount } from 'vue';

const router = useRouter()
const authListener = firebase.auth().onAuthStateChanged(function(user) {
  if(!user) {
    alert(
      'you must be logged in to view this. Redirecting to the home page\n'
      + '（このページを見るためにはログインが必要です。ホーム画面にリダイレクトします）'
    )
    router.push('/')
  }
})

onBeforeUnmount(()=> {
  authListener()
})

const tunes =ref([]);
const albums =ref([]);
const modalTitle =ref('');
const TuneId =ref(0);
const TuneName =ref('');
const Album =ref('');
const DateOfJoining =ref('');
const PhotoFileName = ref("anonymous.png")
// const PhotoPath = ref(variables.PHOTO_URL)

const refreshData = ()=> {
  axios.get(variables.API_URL + "/tune")
  .then((response) => {
    tunes.value = response.data;
    // this.tunes = response.data;
  });
}

const addClick = ()=> {
  modalTitle.value ="Add Tune";  // this.modalTitle 
  TuneId.value =0; // this.TuneId =0;
  TuneName.value ="";  // this.TuneName ="";
  Album.value ="";  // this.Album ="",
  DateOfJoining.value ="";  // this.DateOfJoining ="",
  PhotoFileName.value ="anonymous.png"; // this.PhotoFileName ="anonymous.png"
}

const editClick = (tun)=> {
  modalTitle.value ="Edit Tune";
  TuneId.value =tun.TuneId;
  TuneName.value =tun.TuneName;
  Album.value =tun.Album,
  DateOfJoining.value =tun.DateOfJoining,
  PhotoFileName.value =tun.PhotoFileName
}

const createClick = ()=> {
  axios.post(variables.API_URL + "/tune", {
    TuneName: TuneName.value,
    Album: Album.value,
    DateOfJoining: DateOfJoining.value,
    PhotoFileName: PhotoFileName.value
  })
  .then((response) => {
    refreshData();
    alert(response.data);
  })
}

const updateClick = ()=> {
  axios.put(variables.API_URL + "/tune", {
    TuneId: TuneId.value,
    TuneName: TuneName.value,
    Album: Album.value,
    DateOfJoining: DateOfJoining.value,
    PhotoFileName: PhotoFileName.value
  })
  .then((response) => {
    refreshData();
    alert(response.data);
  })
}

const deleteClick = ()=> {
  if(!confirm("Are you sure?")){
    return;
  }
  axios.delete(variables.API_URL + "/tune/" + id)
  .then((response) => {
    refreshData();
    alert(response.data);
  });
}

const imageUpload = (event)=> {
  let formData = new FormData();
  formData.append('file', event.target.files[0]);
  axios.post(
    variables.API_URL + "tune/savefile",
    formData
  )
  .then((response)=> {
    PhotoFileName.value = response.data;
    // this.PhotoFileName= response.data;
  });
}

onMounted(()=> {
  refreshData();
})

// export default {
//   name: 'Tune',
//   // props: {
//   //   msg: String
//   // },
//   setup() {
    // const PhotoFileName =ref('anonymous.png');
    // const PhotoPath =variables.PHOTO_URL
//     return {
//       tunes,
//       albums,
//       modalTitle,
//       TuneId,
//       TuneName,
//       Album,
//       DateOfJoining,
//       // PhotoFileName,
//       // PhotoPath
//     }
//   }
// }
</script>