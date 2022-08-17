// Temos uma função e não temos um array: /
useEffect(() => {});
// Esta configuração executará a função toda vez que o componente sofrer qualquer tipo de alteração e renderizar, **repetidas vezes**. Ela precisa ser utilizada com **cautela**, pois facilmente resulta em **loops infinitos**.


//Temos uma função e um array vazio:
useEffect(() => {}, []);
// Neste caso, a função será executada similarmente ao `componentDidMount`, rodando apenas uma vez e na montagem do componente.

//Temos uma função, e um array com um ou mais parâmetros:
useEffect(() => {}, [variável1, variável2, ... variávelN]);
//O comportamento deste modelo será semelhante ao `componentDidUpdate` e ele será executado sempre que houver mudança em alguma das variáveis especificadas.

//Temos uma função retornando uma outra função, e o segundo parâmetro pode conter um array populado ou não./ desmonta componente componentWillUnmount
useEffect(() => {

    return () => {}
  }, []);

  // Este caso é mais específico, pois ele pode agregar a utilização de um dos dois últimos exemplos, o `componentDidMount` ou `componentDidUpdate` dependendo do segundo parâmetro, e a função presente no retorno se comporta como `componentWillUnmount`. Ou seja, quando o componente desmonta a função retornada pelo `useEffect` é executada. Você deve definir essa função sempre que precisar limpar algo criado por seu efeito (como algum _timer_, por exemplo)