class CustomCard extends HTMLElement{
    connectedcallback(){
        const  img_slot = this.getElementsByTagName(img) ;
        const  title_slot = this.getElementsByTagName(h2) ;
        const  description_slot = this.getElementsByTagName(p) ;
        const button_slot = this.getElementsByTagName(button);



        <div class="card">
      <img src="./images/download.jfif" alt="Product" />
      <div class="content">
        <h2>Desk setup</h2>
        <p>Programers pc setup at home from a gamers perspective</p>
      </div>
      <div class="actions">
        <button
          class="btn btn-danger"
          onclick="alert('Cancel event triggered')"
        >
          Cancel
        </button>
        <button
          class="btn btn-success"
          onclick="alert('Submit event triggered')"
        >
          Submit
        </button>
      </div>
    </div>
    }
}