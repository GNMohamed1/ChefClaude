function Form() {
  return (
    <form className="add-ingrediant-form">
      <input
        type="text"
        placeholder="e.g. Orange"
        aria-label="Add ingrediant"
      />
      <button type="submit">Add Ingrediant</button>
    </form>
  );
}

export default Form;
