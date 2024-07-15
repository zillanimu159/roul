# Generated by Django 5.0.7 on 2024-07-13 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipe',
            old_name='body',
            new_name='ingredients',
        ),
        migrations.AddField(
            model_name='recipe',
            name='steps',
            field=models.TextField(default='nothing'),
            preserve_default=False,
        ),
    ]
