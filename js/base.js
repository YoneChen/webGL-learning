class GLBase {
    constructor(container) {
        const canvas = document.createElement('canvas');
        canvas.style.width = '100%', canvas.style.height = '100%';
        canvas.width = container.innerWidth * window.devicePixelRatio;
        canvas.height = container.innerHeight * window.devicePixelRatio;
        this.canvas = canvas;
        const gl = canvas.getContext('webgl');
        // Initialize shaders
        if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
            console.log('Failed to intialize shaders.');
            return;
        }
        this.n = this.initVertexBuffers(gl);
        this.initTextures(gl, '../assets/texture.jpg');
        gl.clearColor(0.4, 0.4, 0.4, 1.0);
        gl.clearDepth(1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        container.appendChild(canvas);
        this._loop();
    }
    _loop() {
        this.update();
        window.requestAnimationFrame(this._loop.bind(this));
    }
    start() {
        
    }
    update() {

    }
}