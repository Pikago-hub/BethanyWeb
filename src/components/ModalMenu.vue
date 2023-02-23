<template>
    
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="card-modal" >
        <div class="card">
            <div>
                <h6>Title</h6>
                <p>Description</p>
            </div>
            <div class="image">
                <img class="check" src="../assets/images/bethany.png" alt="" />
            </div>
        </div>
        <div class="card">
            <div>
                <h6>Title</h6>
                <p>Description</p>
            </div>
            <div class="image">
                <img class="check" src="../assets/images/bethany.png" alt="" />
            </div>
        </div>
        <div class="card">
            <div>
                <h6>Title</h6>
                <p>Description</p>
            </div>
            <div class="image">
                <img class="check" src="../assets/images/bethany.png" alt="" />
            </div>
        </div>
        <div class="card">
            <div>
                <h6>Title</h6>
                <p>Description</p>
            </div>
            <div class="image">
                <img class="check" src="../assets/images/bethany.png" alt="" />
            </div>
        </div>
        <ModalMenuVue dishes="dishes" v-show="showModal" @close-modal="showModal = false"/>
        <button  @click="$emit('close-modal')">Back</button>
      </div>
     
      
    </div>
  </template>
  
  <script>
    export default {
        props: ['dishes'],
        created() {
    // props are exposed on `this`
        console.log(this.dishes)
  }
  }
  </script>
  <style scoped>


  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
    
  }
  
  .card-modal {
    text-align: center;
    background-color: white;
    height: 500px;
    width: 500px;
    margin-top: 20%;
    padding: 60px 0;
    border-radius: 20px;
    overflow-y:auto;
  }
  .card{
    display: flex;
    flex-direction: row;
   
  }
  .image{
    margin-left: 0.5 rem;
  }
  .close {
    margin: 10% 0 0 16px;
    cursor: pointer;
  }
  
  .close-img {
    width: 25px;
  }
  .check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
  
  cursor: pointer;
}

</style>