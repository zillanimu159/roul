from rest_framework.serializers import ModelSerializer
from..models import Recipe
class RecipeSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'ingredients', 'steps')