import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChefHat, Clock, Snowflake, Users } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Seo from '@/components/seo/Seo';
import { recipes, slugifyRecipeTitle } from '@/data/recipes';
import { buildMetaDescription, getCanonicalUrl } from '@/lib/seo';
import { buildRecipeJsonLd } from '@/lib/structuredData';
import { siteMetadata } from '@/lib/siteMetadata';

const formatComponentTitle = (key: string, title?: string) => {
  if (title) return title;
  return key
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find((item) => slugifyRecipeTitle(item.title) === slug);
  const canonicalPath = slug ? `/recipes/${slug}` : '/recipes';

  if (!recipe) {
    const fallbackDescription = buildMetaDescription(
      'The recipe you are looking for does not exist. Explore more plant-powered recipes in our collection.'
    );
    const canonicalUrl = getCanonicalUrl(canonicalPath);

    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Seo
          title="Recipe Not Found"
          description={fallbackDescription}
          canonicalPath={canonicalPath}
          canonicalUrl={canonicalUrl}
          noindex
        />
        <Link to="/recipes" className="text-sm hover:underline mb-8 inline-block">← Back to Recipes</Link>
        <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>
        <p>The recipe you're looking for doesn't exist.</p>
      </div>
    );
  }

  const canonicalUrl = getCanonicalUrl(canonicalPath);
  const metaDescription = buildMetaDescription(recipe.description);
  const image = recipe.image ?? siteMetadata.defaultSocialImage;

  const instructionsForSchema = recipe.instructions?.length
    ? recipe.instructions
    : Object.values(recipe.components ?? {})
        .flatMap((component) => component.instructions ?? [])
        .filter(Boolean);

  const ingredientsForSchema = recipe.ingredients?.length
    ? recipe.ingredients
    : Object.values(recipe.components ?? {})
        .flatMap((component) => component.ingredients ?? [])
        .filter(Boolean);

  const recipeJsonLd = buildRecipeJsonLd({
    name: recipe.title,
    description: metaDescription,
    canonicalUrl,
    image,
    author: recipe.author,
    ingredients: ingredientsForSchema,
    instructions: instructionsForSchema,
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    totalTime: recipe.totalTime,
    recipeYield: recipe.servings,
    recipeCategory: recipe.category,
    keywords: recipe.tags?.join(', '),
  });

  const componentEntries = recipe.components ? Object.entries(recipe.components) : [];
  const hasComponents = componentEntries.length > 0;

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <Seo
        title={recipe.title}
        description={metaDescription}
        canonicalPath={canonicalPath}
        canonicalUrl={canonicalUrl}
        jsonLd={recipeJsonLd}
      />

      <div className="max-w-5xl mx-auto space-y-10">
        <Link to="/recipes" className="text-sm hover:underline inline-block">← Back to Recipes</Link>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
            <img
              src={image}
              alt={recipe.imageAlt ?? recipe.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-teal font-semibold">Recipe</p>
              <h1 className="text-4xl font-bold leading-tight mt-2">{recipe.title}</h1>
              <p className="text-muted-foreground text-lg mt-4">{recipe.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Serves {recipe.servings}</span>
              </div>
              {recipe.prepTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{recipe.prepTime}</span>
                </div>
              )}
              {recipe.totalTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{recipe.totalTime}</span>
                </div>
              )}
              {recipe.freezeTime && (
                <div className="flex items-center gap-2">
                  <Snowflake className="h-4 w-4" />
                  <span>{recipe.freezeTime}</span>
                </div>
              )}
              {recipe.difficulty && (
                <div className="flex items-center gap-2">
                  <ChefHat className="h-4 w-4" />
                  <span>{recipe.difficulty}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Category: <span className="capitalize">{recipe.category}</span></p>
              <p>Source: {recipe.source}</p>
              {recipe.storageInstructions && <p>Storage: {recipe.storageInstructions}</p>}
            </div>

            {(recipe.notes || recipe.suzNotes) && (
              <div className="bg-coral/10 border border-coral/20 rounded-2xl p-4 text-sm">
                {recipe.notes && <p className="mb-2">{recipe.notes}</p>}
                {recipe.suzNotes && <p>{recipe.suzNotes}</p>}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Let&apos;s cook</h2>

          {hasComponents ? (
            <Tabs defaultValue={componentEntries[0][0]} className="w-full">
              <TabsList className="flex flex-wrap h-auto">
                {componentEntries.map(([key, section]) => (
                  <TabsTrigger key={key} value={key} className="capitalize">
                    {formatComponentTitle(key, section.title)}
                  </TabsTrigger>
                ))}
              </TabsList>

              {componentEntries.map(([key, section]) => (
                <TabsContent key={key} value={key} className="mt-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Ingredients</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {section.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Instructions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-3 text-sm">
                          {(section.instructions ?? []).map((step, index) => (
                            <li key={index} className="flex gap-3">
                              <span className="flex-shrink-0 w-7 h-7 bg-teal text-white rounded-full flex items-center justify-center text-xs font-medium">
                                {index + 1}
                              </span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-teal text-white rounded-full flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white">
            <Link to="/recipes">Explore more recipes</Link>
          </Button>
          <Button asChild>
            <Link to="/nutrition">Back to Nutrition</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
