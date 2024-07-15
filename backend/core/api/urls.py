from django.urls import path, include
from rest_framework.routers import DefaultRouter
from recipes.api.urls import recipe_router

router = DefaultRouter()

router.registry.extend(recipe_router.registry)

urlpatterns = [
    path("", include(router.urls))
]