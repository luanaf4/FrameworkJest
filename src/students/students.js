module.exports = {
    sum: (notes) => {
        if(Math.min(...notes) !== 0){
            const result = notes.reduce((acc, notes) => {
            acc+=notes;
            return acc;
        }, 0)
        return notes.length > 5 ? result * 2 : result
    }
        return 0;
    }
}