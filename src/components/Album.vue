<template>
  <h1>Album</h1>
  <div class="container">
    <div>
      <button type="button"
        class="btn btn-primary m-2 float-end"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        v-on:click="addClick">
        Add Album
      </button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>
              <div class="d-flex flex-row">
                <input class="form-control m-2"
                v-model="AlbumIdFilter"
                v-on:keyup="FilterFn()"
                placehoder="Filter"/>
                <button type="button" class="btn btn-light"
                v-on:click="sortResult('AlbumId', true)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
                    <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
                  </svg>
                </button>

                <button type="button" class="btn btn-light"
                v-on:click="sortResult('AlbumId', false)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z"/>
                  </svg>
                </button>
              </div>
              AlbumId
            </th>
            <th>
              <div class="d-flex flex-row">
                <input class="form-control m-2"
                v-model="AlbumNameFilter"
                v-on:keyup="FilterFn()"
                placehoder="Filter"/>
                <button type="button" class="btn btn-light"
                 @click="sortResult('AlbumName', true)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
                    <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
                  </svg>
                </button>

                <button type="button" class="btn btn-light"
                 @click="sortResult('AlbumName', false)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z"/>
                  </svg>
                </button>
              </div>
              AlbumName
            </th>
            <th>
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="abm in albums" :key="abm">
            <td>{{ abm.AlbumId }}</td>
            <td>{{ abm.AlbumName }}</td>
            <td>
              <button type="button"
                class="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="editClick(abm)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </button>
              <button type="button"
                class="btn btn-light mr-1"
                @click="deleteClick(abm.AlbumId)">
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
          <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text">Album Name</span>
            <input type="text" class="form-control" v-model="AlbumName"/>
          </div>
          <button type="button" v-on:click="createClick"
          v-if="AlbumId==0" class="btn btn-primary">
            Create
          </button>
          <button type="button" v-on:click="updateClick"
          v-if="AlbumId!=0" class="btn btn-primary">
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
import variables from '../variables.js'
// import { onBeforeUnmount } from 'vue';
// import { ref, onMounted} from '@vue/composition-api'

const router = useRouter()
const authListener = firebase.auth().onAuthStateChanged(function(user) {
  if(!user) {
    alert(
      'you must be logged in to view this. Redirecting to the home page\n'
      +'（このページを見るためにはログインが必要です。ホーム画面にリダイレクトします）'
    )
    router.push('/')
  }
})

onBeforeUnmount(()=> {
  authListener()
})

const albums =ref([])
const modalTitle =ref('')
const AlbumName =ref('')
const AlbumId =ref(0)
const AlbumIdFilter =ref('')
const AlbumNameFilter =ref('')
const albumsWithoutFilter =ref([])

const refreshData = ()=> {
  axios.get(variables.API_URL + "/album")
  .then((response) => {
    albums.value = response.data;
    albumsWithoutFilter.value = response.data;
  });
}

const addClick = ()=> {
  modalTitle.value ="Add Album";
  AlbumId.value =0;
  AlbumName.value ="";
}

const editClick = (abm)=> {
  modalTitle.value ="Edit Album";
  AlbumId.value =abm.AlbumId;
  AlbumName.value =abm.AlbumName;
},

const createClick = ()=> {
  axios.post(variables.API_URL + "/album", {
    AlbumName: AlbumName.value
  })
  .then((response) => {
    this.refreshData();
    alert(response.data);
  })
},

  const updateClick = ()=> {
    axios.put(variables.API_URL + "/album", {
      AlbumId: AlbumId.value,
      AlbumName: AlbumName.value
    })
    .then((response) => {
      this.refreshData();
      alert(response.data);
    })
  },

  const deleteClick = ()=> {
    if(!confirm("Are you sure?")){
      return;
    }
    axios.delete(variables.API_URL + "/album/" + id)
    .then((response) => {
      this.refreshData();
      alert(response.data);
    });
  },

  const FilterFn = ()=> {
    AlbumIdFilter =AlbumIdFilter.value; //?????
    AlbumNameFilter =AlbumNameFilter.value
    
    albums.value = albumsWithoutFilter.value.filter(  //??
      function(el) {
        return el.AlbumId.toString().toLowerCase().includes(
          AlbumIdFilter.toString().trim().toLowerCase()
        )&&
        el.AlbumName.toString().toLowerCase().includes(
          AlbumNameFilter.toString().trim().toLowerCase()
        )
      }
    )
  },

  const sortResult = (prop, asc)=> {
    albums.value = albumsWithoutFilter.value.sort(function(a,b) {
      if(asc) {
        return (a[prop] >b[prop])? 1:((a[prop]< b[prop])? -1:0);
      }
      else {
        return (b[prop] >a[prop])? 1:((b[prop]< a[prop])? -1:0);
      }
    })
  }
  
  onMounted(()=> {
    this.refreshData();
  })

// export default {
//   name: 'Album',
//   // props: {
//   //   msg: String
//   // },
//   setup() {
//     return {
//       albums,
//       modalTitle,
//       AlbumName,
//       AlbumId,
//       AlbumIdFilter,
//       AlbumNameFilter,
//       albumsWithoutFilter
//     }
//   }
// }

</script>