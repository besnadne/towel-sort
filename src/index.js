module.exports = function towelSort(matrix) {

    if(arguments.length < 1 || matrix.length < 1 ){
        return []
      }else {
        let result = matrix.reduce((acc, value, index)=>{
          if(index % 2 !== 0){
           value = value.reverse()
          }
            return  acc.concat(value)
        }, [])
        return result
      }
}
