export default function Marvel({ character}) {
    const loaded = () => {
        return (
        <>
        <h1>{character.Title}</h1>
        </>
    );
   }
   const loading = () => {
    return <h1>Character is not related, to Marvel try DC next time buddy!</h1>
   }

   return character ? loaded() : loading();

}

