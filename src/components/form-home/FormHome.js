import React from 'react'
import "../form-home/FormHome.css"
import "../form-home/Script.js"

function FormHome() {
  return (
    
    <div><form class="formhome">
    <div class="form-home">
    <div class="form-white-section">
        <label>Check in</label>
        <input type="date" placeholder="Add Date"/>
    </div>
    <div class="form-white-section">
        <label>Check Out</label>
        <input type="date" placeholder="Add Date"/>
    </div>

    <div class="form-white-section guest-home">
        <div className='dropdown'>
    

        <label class="label-form-home">Guest</label>
        
        <div class="hoverform">
    <div class="numberone">
        <div class="text">
            <h4>Adultos</h4>
            <p>Edad: Mayores de 13 años</p>
        </div>
        <div class="container">
            <button id="decrement" onclick="stepper(this)"> - </button>
            <input type="number" min="0" max="10" step="1" value="0" id="my-input" readonly/>
            <button id="increment" onclick="stepper(this)"> + </button>
        </div>
    </div>

    <div class="numberone">
        <div class="text">
            <h4>Niños</h4>
            <p>Edad: Menores de 13 años</p>
        </div>
        <div class="container">
            <button id="decrement" onclick="stepper(this)"> - </button>
            <input type="number" min="0" max="10" step="1" value="0" id="my-input" readonly/>
            <button id="increment" onclick="stepper(this)"> + </button>
        </div>
    </div>
    
    </div>

    <div class="form-button">
        <input type="submit" class="btn-cont-form" />
    </div>
    
</div>

</div>
</div>
</form>
</div>
  )
}

export default FormHome