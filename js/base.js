class GLBase {
    constructor(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
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