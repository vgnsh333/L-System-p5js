function lsysgena() {
    let axiom = "F+F+F+F"
    let rule = "F+F-F-FF+F+F-F"
    let iterations = 1;
    for (let x = 0; x < iterations; x++) {
        next_gen = new String();
        for (let i = 0; i < axiom.length; i++) {
            cur_char = axiom.charAt(i);
            switch (cur_char) {
                case "F":
                    next_gen += rule;
                    break;
                case "f":
                    // code block
                    break;
                default:
                    next_gen += cur_char;
                    break;
                // code block
            }
        }
        axiom = next_gen;
    }
    return next_gen;
}