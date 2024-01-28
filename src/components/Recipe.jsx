import "./styles/recipe.css"

const Recipe = () => {
  return (
    <section className="max-w-3xl bg-white md:rounded-2xl md:p-10">
        <div>
          <img className="md:rounded-xl" src="https://avatars.mds.yandex.net/get-images-cbir/1751510/FfE47z5Gds6RTbyzT2l37Q4755/ocr" alt="Omelette" />
        </div>
        <div className="px-8 my-10">
          <h1 className="font-young text-4xl mb-6">Simple Omelette Recipe</h1>
          <p className="text-gray-600">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
          <div className="p-5 rounded-lg my-7 bg-pink-50">
            <h3 className="mb-4 text-xl font-bold text-pink-900">Preparation time</h3>
            <ul className="text-gray-600 list-disc ml-6 pr-6">
              <li className="pl-4 mb-1.5"><b>Total:</b> Approximately 10 minutes</li>
              <li className="pl-4 mb-1.5"><b>Preparation:</b> 5 minutes</li>
              <li className="pl-4"><b>Cooking:</b> 5 minutes</li>
            </ul>
          </div>
          <h2 className="font-young text-3xl text-yellow-900 mb-5">Ingredients</h2>
          <ul className="text-gray-600 list-disc ml-7 mb-8">
            <li className="pl-4 mb-1.5">2-3 large eggs</li>
            <li className="pl-4 mb-1.5">Salt, to taste</li>
            <li className="pl-4 mb-1.5">Pepper, to taste</li>
            <li className="pl-4 mb-1.5">1 tablespoon of butter or oil</li>
            <li className="pl-4">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
          <hr/>
          <h2 className="font-young text-3xl text-yellow-900 mt-7 mb-6">Instructions</h2>
          <ol className="list-decimal ml-7 text-gray-600 mb-8">
            <li className="pl-4 mb-2"><b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
              You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li className="pl-4 mb-2"><b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li className="pl-4 mb-2"><b>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
              the eggs evenly coat the surface.</b></li>
            <li className="pl-4 mb-2"><b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the 
              middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li className="pl-4 mb-2"><b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the 
              fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li className="pl-4"><b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.</li>
          </ol>
          <hr/>
          <h2 className="font-young text-3xl text-yellow-900 mt-7 mb-6">Nutrition</h2>
          <p className="mb-6">The table below shows nutritional values per serving without the additional fillings.</p>
          <div className="flex pl-12 pr-24 py-2 justify-between">
            <p>Calories</p>
            <p className="font-bold text-yellow-900">277kcal</p>
          </div>
          <hr/>
          <div className="flex pl-12 pr-24 py-2 justify-between">
            <p>Carbs</p>
            <p className="font-bold text-yellow-900">0g</p>
          </div>
          <hr/>
          <div className="flex pl-12 pr-24 py-2 justify-between">
            <p>Protein</p>
            <p className="font-bold text-yellow-900">20g</p>
          </div>
          <hr/>
          <div className="flex pl-12 pr-24 py-2 justify-between">
            <p>Fat</p>
            <p className="font-bold text-yellow-900">22g</p>
          </div>
        </div>
    </section>
  )
}

export default Recipe