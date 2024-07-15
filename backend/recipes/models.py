from django.db import models

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=200)
    ingredients = models.TextField()
    steps = models.TextField()

    def __str__(self):
        return f"Recipe: {self.title}"