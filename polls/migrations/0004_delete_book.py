# Generated by Django 4.0.4 on 2022-06-05 22:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0003_book'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Book',
        ),
    ]
