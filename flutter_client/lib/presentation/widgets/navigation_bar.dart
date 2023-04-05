import 'package:flutter/material.dart';

import '../routes.dart';

class NavigationBar extends StatelessWidget {
  const NavigationBar(
      {Key? key, required List<BottomNavigationBarItem> destinations})
      : _destinations = destinations,
        super(key: key);

  final List<BottomNavigationBarItem> _destinations;

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: _currentIndex(context),
      onTap: (index) => _navigateTo(context, index),
      items: _destinations,
    );
  }

  int _currentIndex(BuildContext context) {
    final routeName = ModalRoute.of(context)?.settings.name ?? '';
    switch (routeName) {
      case Routes.home:
        return 0;
      case Routes.match:
        return 1;
      case Routes.settings:
        return 2;
      default:
        return 0;
    }
  }

  void _navigateTo(BuildContext context, int index) {
    switch (index) {
      case 0:
        Navigator.pushNamed(context, Routes.home);
        break;
      case 1:
        Navigator.pushNamed(context, Routes.match);
        break;
      case 2:
        Navigator.pushNamed(context, Routes.settings);
        break;
    }
  }
}
