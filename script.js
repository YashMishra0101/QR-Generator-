const input_field = document.querySelector('[data-input-field]');
const select_sizes = document.querySelector('[data-select-sizes]');
const qr_image = document.querySelector('[data-qr-image]');
const generate_button = document.querySelector('[data-generate-button]');
const download_button = document.querySelector('[data-download-button]');
const qr_image_container = document.querySelector('[data-qr-image-container]');



let size=select_sizes;
size="100"
select_sizes.addEventListener('change',(e)=>{
    size=e.target.value;
})

const qr_code_info=()=>{
    new QRCode(qr_image_container, {
        text:input_field.value,
        width: size,
        height: size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}

generate_button.addEventListener('click',()=>{
    qr_image_container.innerText="";
    input_field = input_field .value==="" ? alert("Input filed is empty"): qr_code_info();
})

download_button.addEventListener('click',()=>{
    const qr_body_img = document.querySelector('.qr-image-container img');
    if( qr_body_img!== null){
        let img_src = qr_body_img.getAttribute('src');
        download_button.setAttribute('href', img_src);
    }
    else{
        alert("Empty QR")
    }

    // qr_body_img !== null
    //? download_button.setAttribute('href', qr_body_img.getAttribute('src'))
    //: alert("Empty QR");

     
})

input_field.addEventListener('keydown',(e)=>{
 if(e.key==="Enter" & input_field!==""){
    qr_code_info();
 }
})