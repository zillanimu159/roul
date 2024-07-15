from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import RecipeViewSet

recipe_router = DefaultRouter()
recipe_router.register(r'posts', RecipeViewSet)